import { useState, Component } from "react";
import cred from "../data/googleSheet";
import gapi from "gapi";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.gapi = require("gapi");
    this.initClient = this.initClient.bind(this);
    this.handleClientLoad = this.handleClientLoad.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("hello bitch");
    this.handleClientLoad();
  }

  initClient() {
    gapi.client
      .init({
        apiKey: cred.apiKey,
        clientID: cred.clientID,
        scope: cred.scope,
        discoveryDocs: [
          "https://sheets.googleapis.com/$discovery/rest?version=v4"
        ]
      })
      .then(() => {
        this.gapi.auth2
          .getAuthInstance()
          .isSignedIn.listen(this.updateSingInStatus);
        this.updateSingInStatus(
          this.gapi.auth2.getAuthInstance().isSignedIn.get()
        );
      });
  }
  handleClientLoad() {
    this.gapi.load("client:auth2", this.initClient);
  }

  handleChange(event) {
    //function to check the input of the form
    const x = document.getElementById("input").value;

    this.setInput(event.target.value);
  }

  handleSubmit(event) {
    //function to submit the from to google sheet
    const params = {
      spreadsheetId: cred.sheetID,
      range: "Sheet 1",
      valueInputOption: "RAW",
      inserDataOption: "INSERT_ROWS"
    };

    const valueRangeBody = {
      majorDimension: "ROWS",
      values: [event.target.value]
    };
    let request = gapi.client.sheets.spreadsheets.values.append(
      params,
      valueRangeBody
    );
    request.then(
      function (res) {
        console.log(res.result);
      },
      function (reason) {
        console.log(reason.result.error.message);
      }
    );
    ///event.preventDefault();
  }

  render() {
    return (
      <div>
        <form>
          <input onChange={this.handleChange} id="input" />
          <button type="submit" onClick={this.handleSubmit}>
            Submit Form
          </button>
          <p> {this.state.input}</p>
        </form>
      </div>
    );
  }
}
export default Form;
