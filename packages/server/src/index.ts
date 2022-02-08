import axios from 'axios';
import bodyPraser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { verifyToken, withoutSlash } from './utils';

const app = express();
const port = 8081;
const host = 'server.lvh.me';
const client_id = process.env.CLIENT_ID as string;
const cognitoURL =
  'https://livecontrol-internal-user-pool-stg.auth.us-west-1.amazoncognito.com';

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

app.post('/auth', async (req, res) => {
  const { refresh_token, token, access_token } = req.body;

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
  try {
    const response = await axios.post(
      `${cognitoURL}/oauth2/token`,
      verifyOptions(req.get('Referer') as string, {
        grant_type: 'refresh_token',
        refresh_token: req.body.refreshToken,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      }
    );
    console.log(response.data);
    res.status(200);
    res.send(response.data);
  } catch (e) {
    console.log(e);
    res.status(401);
    res.send({
      message: 'Unauthorized',
      body: (<Error>e).message,
    });
  }
});

app.post('/token', async (req, res) => {
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
