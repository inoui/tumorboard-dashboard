import React from 'react';


class Footer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <p>Found {this.props.amountOfQuestionnaires} Questionnaires</p>
    );
  }
}

export default Footer;
