import Ember from 'ember';

export function initialize(/* container, application */) {

  Ember.$.ajaxSetup({
    headers: {
      "X-Parse-Application-Id": "bOUtqXguIDTZWAYPZbRJ5dZmvZTTs26AzNl4QO4a",
      "X-Parse-REST-API-Key": "trnhBkP8m4pMnriIXtSksgfMrqSPscgFMDg8n1u3"
    }

  });
}


export default {
  name: 'parse',
  initialize: initialize
};
