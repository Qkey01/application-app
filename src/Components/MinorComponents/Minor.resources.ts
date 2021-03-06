import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Font, Margin, SharedStyles } from '../Shared.resources';

export const TopNavStyles = {
  TopNavContainer: styled.div<{ selectedPage: number }>`
    height: 2em;
    background-color: slategrey;
    padding: 0.5em 0 0;
    width: 100%;
    margin-bottom: ${Margin.medium};
    display: block;

    & > :nth-child(${(p) => p.selectedPage}) {
      background-color: white;
      color: black;
    }
  `,

  NavButton: styled(Link)`
    width: auto;
    height: 100%;
    padding: 1em 1em 1.1em;
    color: white;
    text-decoration: none;
    &:hover {
      background-color: white;
      color: black;
    }
  `,
};

export const AccordionStyles = {
  Handle: styled.button`
    background-color: slategrey;
    color: white;
    width: 100%;
    height 4em;
    display: flex;
    align-items: center;
    padding: 0.5em;
    font: ${Font.standard};
    border: solid white 1px;
    border-radius: 0.5em;
    cursor: pointer;

    &:focus{
      outline: none;
    }
  `,
  Panel: styled.div<{ ph: number }>`
    background-color: white;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 0;
    overflow: hidden;
    margin-bottom: 0;
    &.is-panel-open {
      padding: 2%;
      max-height: ${(props) => props.ph}px;
    }
    &.with-transition {
      transition: max-height 0.25s ease-in-out, padding 0.2s ease-in-out;
    }
  `,
  AccordionContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
  `,
  SvgContainer: styled.div`
    height: 100%;
    width: 4em;
    transition: transform 0.2s;
    &.is-panel-open {
      transform: rotate(90deg);
    }
  `,
  SvgFit: styled.svg`
    height: 100%;
    width: 100%;
  `,
};

export const TabBarStyles = {
  TabContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  //only displays content of nth child, which corresponds to the content of the selected tab
  TabContentContainer: styled.div<{ showChild: number }>`
    display: contents;
    & > * {
      display: none;
    }

    & > div:nth-child(${(p) => (p.showChild > 0 ? p.showChild : 'n')}) {
      display: flex;
    }
  `,

  TabButton: styled.div`
    height: 1.25em;
    font: ${Font.mediumlarge};
    appearance: button;
    text-rendering: auto;
    color: darkslategrey;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    border-bottom: solid lightslategrey 0.15em;
    padding: 0.5em 0.8em;

    &:first-child {
      padding-left: 0.45em;
    }

    &:last-child {
      margin-right: 30%;
      padding-right: 0.45em;
    }
  `,
  //buttonW: width of all the TabButtons, selected: currently selected TabButton
  //note: TabSlider needs to be the child directly after the TabButtons
  TabSlider: styled.div<{ buttonW: number[]; selected: number }>`
    height: 0.26em;
    background-color: darkslategrey;
    width: ${(p) => p.buttonW[p.selected - 1]}px;
    position: relative;
    align-self: flex-end;
    //TabSlider x-axis offset is the negative sum of widths of be TabButtons (from right to left)
    left: ${(p) => {
      let val: number = 0;
      for (let i: number = p.buttonW.length - 1; i >= p.selected - 1; i--) val = val - p.buttonW[i];
      return val;
    }}px;

    transition: width 0.2s ease-in-out, left 0.2s ease-in-out;
  `,

  TabBar: styled(SharedStyles.Sleeve)`
    display: flex;
    width: 97%;
    justify-content: flex-start;
    margin: 0 0 ${Margin.medium} 3%;
  `,
};
