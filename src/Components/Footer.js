import React from "react"

import { Navbar } from "reactstrap"

import { IconContext } from "react-icons"
import { FaRegHeart, FaCopyright, FaGithub, FaReact } from "react-icons/fa"
import { TiPrinter } from "react-icons/ti"

import "../config/global.js"

const Footer = React.memo(() => {
  return (
    <Navbar
      className="footer d-flex justify-content-center justify-content-sm-between d-print-none"
      fixed="bottom"
    >
      <small className="mx-1 text-muted text-center text-md-left d-flex align-items-center animated fadeInUp">
        <span>
          <IconContext.Provider value={{ className: "mr-1" }}>
            <FaCopyright id="copy-icon" />
          </IconContext.Provider>
          {new Date().getFullYear()}
        </span>
        <span>
          &mdash; Made with
          <IconContext.Provider
            value={{ className: "text-danger animated pulse infinite mx-1" }}
          >
            <FaRegHeart id="heart-icon" />
          </IconContext.Provider>
        </span>
        <span>
          and React
          <IconContext.Provider
            value={{ className: "text-primary spin rotate mx-1" }}
          >
            <FaReact id="react-icon" />
          </IconContext.Provider>
        </span>
        <span>
          &mdash; by <b>{global.meta.author}</b>
        </span>
      </small>

      <button
        className="print-me text-muted animated fadeInUp d-none d-sm-block btn btn-link p-0 border-0"
        onClick={() => {
          window.print()
        }}
      >
        <TiPrinter id="print-icon" />
      </button>

      <small className="mx-1 d-flex align-items-center animated fadeInUp">
        <IconContext.Provider value={{ className: "mr-1" }}>
          <FaGithub id="github-icon" />
        </IconContext.Provider>
        <a href={global.githubRepo} target="_blank" rel="noopener noreferrer">
          {global.githubRepo}
        </a>
      </small>
    </Navbar>
  )
})

export default Footer
