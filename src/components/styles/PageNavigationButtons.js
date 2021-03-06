import styled from '@emotion/styled';

export const StyledNextPrevious = styled('div')`
  margin: 0px;
  padding: 0px;
  width: auto;
  display: grid;
  grid-template-rows: auto;
  column-gap: 24px;
  grid-template-columns: calc(50% - 8px) calc(50% - 8px);

  .previousBtn {
    cursor: pointer;
    -moz-box-align: center;
    -moz-box-direction: normal;
    -moz-box-orient: horizontal;
    margin: 0px;
    background-color: var(--base-background);
    padding: 0px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    place-self: stretch;
    border-radius: 3px;
    border: 1px solid var(--border-color);
    transition: border 200ms ease 0s;
    box-shadow: var(--custom-hover) 0px 1px 3px 0px;
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }

  .nextBtn {
    cursor: pointer;
    -moz-box-align: center;
    -moz-box-direction: normal;
    -moz-box-orient: horizontal;
    margin: 0px;
    padding: 0px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    place-self: stretch;
    border-radius: 3px;
    border: 1px solid var(--border-color);
    transition: border 200ms ease 0s;
    box-shadow: var(--custom-hover) 0px 1px 3px 0px;
    text-decoration: none;

    background-color: var(--base-background);
    color: ${props => props.theme.colors.text};
  }

  .nextBtn:hover,
  .previousBtn:hover {
    text-decoration: none;
    border: 1px solid var(--accent-color);
  }

  .nextBtn:hover .rightArrow,
  .previousBtn:hover .leftArrow {
    color: var(--accent-color);
  }

  .leftArrow {
    display: flex;
    margin: 0px;
    color: rgb(157, 170, 182);
    flex: 0 0 auto;
    font-size: 24px;
    transition: color 200ms ease 0s;
    padding: 16px;
    padding-right: 16px;
  }

  .rightArrow {
    display: flex;
    flex: 0 0 auto;
    font-size: 24px;
    transition: color 200ms ease 0s;
    padding: 16px;
    padding-left: 16px;
    margin: 0px;
    color: rgb(157, 170, 182);
  }

  .nextPreviousTitle {
    display: block;
    margin: 0px;
    padding: 0px;
    transition: color 200ms ease 0s;
  }

  .nextPreviousTitle span {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
  }

  @media (max-width: 767px) {
    display: block;
    padding: 0 15px;

    .previousBtn {
      margin-bottom: 20px;
    }
  }
`;
