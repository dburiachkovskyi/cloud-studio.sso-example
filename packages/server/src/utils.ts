import axios from 'axios';
import { verify } from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';

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
