import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Nav from '@/components/Nav'

const { Header, Content, Footer } = Layout

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header
            style={{
              position: 'fixed',
              width: '100%',
              height: 'auto',
              backgroundColor: '#fff',
              padding: 0,
            }}
          >
            <Nav />
          </Header>
          <Content style={{ marginTop: 111 }}>
            content
            <Switch>
              <Route path="/" component={Main} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>© 2017 Nike, Inc.</Footer>
        </Layout>
      </Router>
    )
  }
}

function Main() {
  return null
}

export default App