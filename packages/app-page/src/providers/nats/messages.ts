import messages from './proto/compiled';

export const getEncoderConfigAllMessage = (
  properties: messages.encodergrpc.IGetEventConfigAllRequest
): Uint8Array => {
  const ctr = messages.encodergrpc.GetEncoderConfigAllRequest;
  const err = ctr.verify(properties);

  if (err) {
    throw new Error(err);
  }
  return ctr.encode(ctr.create(properties)).finish();
};
