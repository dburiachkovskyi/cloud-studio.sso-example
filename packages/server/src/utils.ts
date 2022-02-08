import axios from 'axios';
import { verify } from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';
import { Source } from './constants';
import { load, Message } from 'protobufjs';

export const pem = async () => {
  const jwks = await axios.get(
    'https://cognito-idp.us-west-1.amazonaws.com/us-west-1_XLqeANhKz/.well-known/jwks.json'
  );
  return jwkToPem(jwks.data.keys[0]);
};

export const verifyToken = (token: string) =>
  new Promise(async (res, rej) => {
    verify(
      token,
      await pem(),
      { algorithms: ['RS256'] },
      (err, decodedToken) => {
        if (err) {
          rej(err);
        } else {
          res(decodedToken);
        }
      }
    );
  });

export const withoutSlash = (str: string) =>
  str.endsWith('/') ? str.slice(0, -1) : str;

export const getMessage = (cmd: string, payload: any): Promise<Buffer> =>
  new Promise((res, rej) => {
    load('src/types.proto', (err, root) => {
      if (err) rej(err);

      const protoMessageTemplate = root?.lookupType(cmd);

      if (payload) {
        const verifyErr = protoMessageTemplate?.verify(payload);

        if (verifyErr) {
          rej(verifyErr);
        }
      }
      const message = protoMessageTemplate?.create(payload) as Message;

      const buf = protoMessageTemplate?.encode(message).finish() as Buffer;

      res(buf);
    });
  });

export const getCMDSubject = () =>
  [
    Source.STREAM,
    Source.PRODID,
    'client',
    Source.CLIID,
    'encoder',
    Source.ENCID,
    'camera',
    Source.CAMID,
    'command',
  ].join('.');

export const getResponseSubject = () =>
  [
    Source.STREAM,
    Source.PRODID,
    'client',
    Source.CLIID,
    'encoder',
    Source.ENCID,
    'camera',
    Source.CAMID,
    'response',
  ].join('.');
