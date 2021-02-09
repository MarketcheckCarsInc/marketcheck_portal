import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'

const PagesContainer = styled.div`
  margin-bottom: 1em;
  text-align: center;
  ${mediaMax.phone`
    display: none;
  `}
`

const PageNumber = styled.span`
  color: ${colors.gray};
  cursor: pointer;
  font-size: 0.9em;
  font-weight: 300;
  margin: 0 0.2em;
  padding: 0.2em 0.5em;

  &.current {
    background-color: ${colors.softblue};
    border-radius: 1em;
    color: ${colors.white};
  }
`

class Paginator extends Component {

  constructor (props) {
    super(props)

    this.perPage = 10

    this.state = {
      currentPage: 0,
      pageSize: 10,
      totalPages: 0,
      limitPages: 0,
      offsetShow: 0,
      limitShow: 10,
      ready: false
    }
  }

  totalPages () {
    const numFounds = this.props.totalFound

    return Math.floor(numFounds/this.perPage)
  }

  limitPages () {
    let limit = 0

    if ((this.totalPages() - (this.state.currentPage * this.state.pageSize)) > 1) {
      if(this.totalPages() <= this.state.pageSize) {
        limit = this.totalPages()
      } else {
        limit = (Math.floor((this.state.currentPage/5)+1) * this.state.pageSize)
      }

      return limit
    } else {
      return this.state.totalPages
    }
  }

  showPages (start, end) {
    return Array.from({length: (end - start)}, (v, k) => k + start);
  }

  prevPage () {
    let prevPage = this.state.currentPage - 1;

    if (prevPage < 0) return;

    this.setState({
      currentPage: prevPage,
      offsetShow: (prevPage * this.perPage),
    }, () => {
      this.setState({
        limitPages: this.limitPages()
      })

      this.props.updateSuperState({
        start: this.state.offsetShow,
        //rows: this.state.offsetShow + this.perPage
      })
    })
  }

  nextPage () {
    let nextPage = this.state.currentPage + 1;

    if (nextPage > this.props.totalFound / this.state.pageSize) return;

    this.setState({
      currentPage: nextPage,
      offsetShow: (nextPage * this.perPage)
    }, () => {
      this.setState({
        limitPages: this.limitPages()
      })

      this.props.updateSuperState({
        start: this.state.offsetShow,
        //rows: this.state.offsetShow + this.perPage
      })
    })
  }

  firstPage () {
    this.setState({
      currentPage: 0
    }, () => {
      this.setState({
        limitPages: this.limitPages()
      })

      this.props.updateSuperState({
        start: this.state.offsetShow,
        //rows: this.state.offsetShow + this.perPage
      })
    })
  }

  lastPage () {
    this.setState({
      currentPage: this.totalPages()-1
    }, () => {
      this.setState({
        limitPages: this.limitPages()
      })

      this.props.updateSuperState({
        start: this.state.offsetShow,
        //rows: this.state.offsetShow + this.perPage
      })
    })
  }

  handleSelectPage (page) {
    this.setState({
      currentPage: page,
      offsetShow: (page * this.perPage)
    }, () => {
      this.setState({
        limitPages: this.limitPages()
      })

      this.props.updateSuperState({
        current: page,
        start: this.state.offsetShow,
        //rows: this.state.offsetShow + this.perPage
      })
    })
  }

  componentDidMount () {
    this.setState({
      totalPages: this.totalPages(),
      limitPages: this.limitPages(),
      ready: true
    })
  }

  componentWillReceiveProps (props) {
    this.setState({
      currentPage: props.resetPagination ? 0 : this.state.currentPage
    }, () => {
      this.setState({
        limitPages: this.limitPages()
      })
    })
  }

  render () {
    const {ready} = this.state
    return ready && this.state.limitPages ? (
      <PagesContainer>
        {this.state.currentPage > 0 ?
          (<span>
            <PageNumber onClick={this.firstPage.bind(this)}>&#60;&#60;</PageNumber>
            <PageNumber onClick={this.prevPage.bind(this)}>&#60;</PageNumber>
          </span>)
        : null }

        {this.showPages((this.state.limitPages-this.state.pageSize > 0 ?  this.state.limitPages-this.state.pageSize : 0),this.state.limitPages).map((page, index) => {
          return <PageNumber onClick={() => this.handleSelectPage.bind(this)(page)} key={index} className={this.state.currentPage === page ? 'current' : ''}>{page+1}</PageNumber>
        })}

        {this.state.currentPage < (this.state.totalPages-1) ?
          (<span>
            <PageNumber onClick={this.nextPage.bind(this)}>&#062;</PageNumber>
            <PageNumber onClick={this.lastPage.bind(this)}>&#062;&#062;</PageNumber>
          </span>)
        : null }
      </PagesContainer>
    ) : null
  }
}

export default Paginator
