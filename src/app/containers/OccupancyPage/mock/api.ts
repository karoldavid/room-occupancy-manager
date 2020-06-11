import data from './guests.json';

export interface MockResponse {
  data: number[];
}

const mockFetch = (
  success: boolean,
  timeout: number,
): Promise<MockResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
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

export const fetchGuests = async () => {
  try {
    const response: MockResponse = await mockFetch(true, 1000);
    return response;
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};
