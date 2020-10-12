/* This file was generated by https://github.com/dested/serverless-client-builder */
/* tslint:disable */
import {ClientTransformOptions, ClientOptions, ClientSocketOptions, ControllerOptions} from './baseClient';
declare type ObjectId = string;

export class MainClient {
  static async hi<TPromise = HiResponse>(
    model: HiRequest,
    handle: {
      200?: (result: HiResponse) => void;
      500?: (result: string) => void;
      400: (result: {error: string}) => void;
      401?: (error: string) => void;
    }
  ): Promise<TPromise | undefined> {
    let url = ClientOptions.baseUrl + '/main/hi?';

    return makeGetRequest(url, model, 'GET', handle);
  }
}

export interface HiRequest {}

export interface HiResponse {
  hi: boolean;
}

async function handleResponse(responseText: string, status: number, handle: any) {
  try {
    if (handle[status]) {
      const val = responseText === '' ? null : JSON.parse(responseText);
      await handle[status](val);
      return undefined;
    } else {
      switch (status) {
        case 200: {
          return JSON.parse(responseText);
        }
        case 401: {
          ClientOptions.handleUnauthorized(responseText);
          break;
        }
        case 500: {
          const body = JSON.parse(responseText);
          ClientOptions.handleError(body.error || responseText);
          break;
        }
      }
    }
  } catch (ex) {
    if (!handle[500]) {
      ClientOptions.handleError(ex.toString());
    } else {
      await handle[500](ex.toString());
    }
  }
}
async function makeRequest(url: string, model: any, method: string, handle: any) {
  try {
    const options = {
      method,
    } as RequestInit;

    options.body = JSON.stringify(model);

    const response = await fetch(url, ClientTransformOptions(options));
    const status = response.status;
    const responseText = await response.text();
    return handleResponse(responseText, status, handle);
  } catch (ex) {
    return handleResponse(ex.toString(), 500, handle);
  }
}

async function makeGetRequest(url: string, model: any, method: string, handle: any) {
  try {
    const options = {
      method,
    } as RequestInit;
    url += Object.keys(model)
      .filter(key => !!(model as any)[key])
      .map(key => `${key}=${encodeURIComponent((model as any)[key])}`)
      .join('&');

    const response = await fetch(url, ClientTransformOptions(options));
    const status = response.status;
    const responseText = await response.text();
    return handleResponse(responseText, status, handle);
  } catch (ex) {
    return handleResponse(ex.toString(), 500, handle);
  }
}