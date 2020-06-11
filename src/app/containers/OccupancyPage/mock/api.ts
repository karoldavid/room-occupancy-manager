import data from './guests.json';

export interface MockResponse {
  data: number[];
}

const mockFetch = (
  success: boolean,
  timeout: number,
  throwError: boolean,
): Promise<MockResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!throwError && success) {
        const response: MockResponse = {
          data,
        };
        return resolve(response);
      } else {
        return reject({ status: 500, message: 'failed to fetch' });
      }
    }, timeout);
  });
};

export const fetchGuests = async (throwError = false) => {
  try {
    const response: MockResponse = await mockFetch(true, 1000, throwError);
    return response;
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};
