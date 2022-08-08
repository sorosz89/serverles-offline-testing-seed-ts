import { server } from './helpers/endpoint';
import { StatusCodes } from 'http-status-codes';

describe('Test hello lambda function with serverless-offline', () => {
  it('should trigger hello function', async () => {
    const { status } = await server.get('/');
    expect(status).toBe(StatusCodes.OK);
  });

  it('should trigger not deployed hello function', async () => {
    const { status } = await server.get('/not');
    expect(status).toBe(StatusCodes.OK);
  });
});
