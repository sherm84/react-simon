import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../components/Button/Button';
import Game from './Game';
configure({adapter: new Adapter()});

describe('<Game/>', () => {
    let game;
    beforeEach(() => {
        game = shallow(<Game/>);
    });

    it('should render', () => {
        expect(game.exists()).toBe(true);
    });
});