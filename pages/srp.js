import React from 'react'
import { initGA, logPageView } from '%/ga'
import SRP from '@/SRP'
import FontsHOC from '@/HOC/Fonts'

class Srp extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        if (!window.GA_INITIALIZED) {
          initGA()
          window.GA_INITIALIZED = true
        }

        logPageView()
    }

    render () {
        return (<SRP {...this.props} />)
    }
}

export default FontsHOC(Srp)
