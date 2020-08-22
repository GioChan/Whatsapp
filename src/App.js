import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import HeaderNav from './components/HeaderNav';
import HeaderTop from './components/HeaderTop';
import Body from './components/Body';
import ChatScreen from './components/ChatScreen';
import { useTransition } from 'react-spring';

createGlobalStyle`
   *, *:before, *:after {
    box-sizing: border-box;
  }
   body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    background-color: #f1f1f2;
   }
`;

const StyledApp = styled.div`
  max-width: 450px;
  margin: 0 auto;
  position: relative;
`;

type State = {
  viewState: string,
  chatScreenIsVisible: boolean,
  currentChatId: number,
  searchTerm: string,
  searchInputIsvisible: boolean,
  dropdownIsVisible: boolean,
};

class App extends React.Component<null, State> {
  state = {
    viewState: '2',
    chatScreenIsVisible: false,
    currentChatId: 0,
    searchTerm: '',
    searchInputIsvisible: false,
    dropdownIsVisible: false,
  };

  showSearchInput = () => {
    this.setState({ searchInputIsvisible: true, viewState: '2' });
  };

  closeSearchInput = () => {
    this.setState({ searchInputIsvisible: false, searchTerm: '' });
  };

  handleSearchtermChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  changeViewState = (event: SyntheticInputEvent<HTMLDataListElement>) => {
    const newState = event.target.dataset.nav;
    this.setState({ viewState: newState });
  };

  showChatScreen = (id: number) => {
    this.setState((prevState) => {
      return { chatScreenIsVisible: !prevState.chatScreenIsVisible };
    });
    // this.setState({ chatScreenIsVisible: true, currentChatId: id });
  };

  closeChatScreen = () => {
    this.setState({ chatScreenIsVisible: false, currentChatId: 0 });
  };

  toggleDropdown = () => {
    this.setState((prevState) => {
      return { dropdownIsVisible: !prevState.dropdownIsVisible };
    });
  };

  render() {
    return (
      <StyledApp>
        <HeaderTop
          searchTerm={this.state.searchTerm}
          handleSearchtermChange={this.handleSearchtermChange}
          showSearchInput={this.showSearchInput}
          closeSearchInput={this.closeSearchInput}
          searchInputIsvisible={this.state.searchInputIsvisible}
          toggleDropdown={this.toggleDropdown}
          dropdownIsVisible={this.state.dropdownIsVisible}
        />
        <HeaderNav viewState={this.state.viewState} changeViewState={this.changeViewState} />
        <Body
          showChatScreen={this.showChatScreen}
          viewState={this.state.viewState}
          searchTerm={this.state.searchTerm}
        />
        <useTransition
          items={this.state.chatScreenIsVisible}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={{ duration: 200 }}
        >
          {(show) =>
            show &&
            ((props) => (
              <ChatScreen
                style={props}
                currentChatId={this.state.currentChatId}
                closeChatScreen={this.closeChatScreen}
              />
            ))
          }
        </useTransition>
      </StyledApp>
    );
  }
}

export default App;
