import axios from 'axios';
import bodyPraser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { env } from './constants';
import { cmd, init } from './nats';
import { verifyToken, withoutSlash } from './utils';
import { CognitoIdentityServiceProvider } from 'aws-sdk';

import { entries, camelCase, reduce } from 'lodash';

export const transformAuthResponse = (
  data?: CognitoIdentityServiceProvider.AuthenticationResultType | null
) =>
  data
    ? reduce(
        entries(data),
        (acc, [key, value]) => ({ ...acc, [camelCase(key)]: value }),
        {}
      )
    : null;

const app = express();
const port = 8081;
const host = 'server.lvh.me';
const client_id = process.env.CLIENT_ID as string;
const cognitoURL =
  'https://command-center.stg.livecontrol.io/';

const provider = new CognitoIdentityServiceProvider({
  region: 'us-west-1',
});

init();

const verifyOptions = (
  redirect_uri: string,
  additional: Record<string, string> = {}
) =>
  new URLSearchParams({
    grant_type: 'authorization_code',
    ...additional,
    client_id,
    redirect_uri: withoutSlash(redirect_uri),
  }).toString();

app.use(
  bodyPraser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(
  cors({
    origin: 'lvh.me',
  })
);
app.use(cookieParser());

app.get('/', (_, res) => {
  res.status(200);
  res.send('Hello!');
});

app.get('/cmd', async (req, res) => {
  await cmd(env, 'GetEncoderConfigAllRequest');
  res.status(200);
  res.send('OK');
});

app.post('/auth', async (req, res) => {
  const { token } = req.body;

  if (!token) {
    res.status(401);
    res.send({
      message: 'Unauthorized',
    });
    return;
  }
  try {
    const decodedToken: any = await verifyToken(token);
    res.status(200);
    res.send(decodedToken);
  } catch (e) {
    console.log(e);
    res.status(401);
    res.send({
      message: 'Unauthorized',
      body: (<Error>e).message,
    });
  }
});

app.get('/logout', async (req, res) => {
  try {
    await axios.get(
      `${cognitoURL}/logout?${new URLSearchParams({
        client_id,
        response_type: 'code',
        redirect_uri: withoutSlash(req.get('Referer') as string),
      }).toString()}`
    );
    res.status(200);
    res.send();
  } catch (e) {
    res.status(401);
    res.send({
      body: (<Error>e).message,
    });
  }
});

app.post('/refresh', async (req, res) => {
  provider.initiateAuth(
    {
      AuthFlow: 'REFRESH_TOKEN_AUTH',
      AuthParameters: {
        REFRESH_TOKEN: req.body.refreshToken as string,
      },
      ClientId: process.env.CLIENT_ID as string,
    },
    (err, response) => {
      if (err) {
        console.log(err);
        res.status(401);
        res.send({
          message: 'Unauthorized',
          body: <Error>err,
        });
      }
      res.status(200);
      res.send(transformAuthResponse(response?.AuthenticationResult));
    }
  );
});

app.post('/token', async (req, res) => {
  provider.initiateAuth(
    {
      AuthFlow: 'REFRESH_TOKEN_AUTH',
      AuthParameters: {
        REFRESH_TOKEN: req.body.refreshToken as string,
      },
      ClientId: process.env.CLIENT_ID as string,
    },
    (err, response) => {
      if (err) {
        console.log(err);
        res.status(401);
        res.send({
          message: 'Unauthorized',
          body: <Error>err,
        });
      }
      res.status(200);
      res.send(transformAuthResponse(response?.AuthenticationResult));
    }
  );
  try {
    const response = await axios.post(
      `${cognitoURL}/oauth2/token`,
      verifyOptions(req.get('Referer') as string, {
        code: req.body.code,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      }
    );
    res.status(200);
    res.send(response.data);
  } catch (e) {
    res.status(401);
    res.send({
      message: 'Unauthorized',
      body: (<Error>e).message,
    });
  }
});

// start the Express server
app.listen(port, host, () => {
  console.log(`server started at http://${host}:${port}`);
});
