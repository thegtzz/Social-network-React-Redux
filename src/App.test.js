import React from 'react';
import ReactDOM from 'react-dom'
import MainApp from './App';
import {act} from "@testing-library/react";

it('renders without crashing', async () => {
  await act(async () => {
    const div = document.createElement('div')
    ReactDOM.render(<MainApp />, div);
    ReactDOM.unmountComponentAtNode(div)
  })
});
