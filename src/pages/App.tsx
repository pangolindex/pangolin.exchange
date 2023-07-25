import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Layout from '../layout'
import Intercom from 'src/intercom'

export default function App() {
  return (
    <Suspense fallback={null}>
      <Intercom appID={'uj2kwt4z'} />
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </Layout>
    </Suspense>
  )
}
