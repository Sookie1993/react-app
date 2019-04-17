import React, { Component } from 'react';
import './App.css';
// import { Button } from 'antd';
// 未导出使用

const Joke = React.memo((props) => (
  <div>
    {props.value || 'loading...' }
  </div>
));
// 提供者和消费者 start **************************
const ThemeContext = React.createContext();

const ThemeProvider = ThemeContext.Provider; // 提供者
const ThemeConsumer = ThemeContext.Consumer; // 消费者

class Subject extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {
          (theme) => (
            <h1 style={{color: theme.mainColor}}>
              {this.props.children}
            </h1>
          )
        }
      </ThemeConsumer>
    );
  }
}
const Paragraph = (props, context) => {
  return (
    <ThemeConsumer>
      {
        (theme) => (
          <p style={{color: theme.textColor}}>
            {props.children}{theme.content}
          </p>
        )
      }
    </ThemeConsumer>
  );
};
const Page = () => (
  <div>
    <Subject>这是标题</Subject>
    <Paragraph>
      这是正文
    </Paragraph>
  </div>
);
// 提供者和消费者 end  **************************
class App extends Component {
  render() {
    return (
      <div className="App">
        <style jsx>
          {
            `
              p {
                color: red
              }
            `
          }
        </style>
        <header className="App-header">
          <p>
            测试
          </p>
          {/*<Button type="primary">Button</Button>*/}
          <Joke value={"啦啦啦啦"}/>
          
          {/***** 提供者和消费者 ****/}
          <ThemeProvider value={{mainColor: 'green', textColor: 'red', content: "哈哈哈"}} >
            <Page />
          </ThemeProvider>
        <div onClick={()=>{window.location.hash = "/about"}}>跳转</div>
        </header>
      </div>
    );
  }
}

export default App;
