import React from 'react';
import { render } from '@testing-library/react';

import StoreFeatureGameDetail from './store-feature-game-detail';

describe('StoreFeatureGameDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoreFeatureGameDetail />);
    expect(baseElement).toBeTruthy();
  });
});
