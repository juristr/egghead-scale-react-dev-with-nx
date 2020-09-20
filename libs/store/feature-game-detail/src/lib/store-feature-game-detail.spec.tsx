import React from 'react';
import { findByTestId, render } from '@testing-library/react';

import StoreFeatureGameDetail from './store-feature-game-detail';

function mockFetch(data) {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => data,
    });
  });
}

describe('StoreFeatureGameDetail', () => {
  beforeEach(() => {
    window.fetch = mockFetch({
      image: 'someimage.jpg',
      title: 'some title',
    });
  });

  it('should render successfully', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const props: any = {
      match: {
        params: {
          id: '1',
        },
      },
    };

    const { baseElement } = render(<StoreFeatureGameDetail {...props} />);

    const element = await findByTestId(baseElement, 'game-detail-container');
    expect(element).toBeTruthy();
  });
});
