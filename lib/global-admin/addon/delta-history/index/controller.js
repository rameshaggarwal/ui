import Controller from '@ember/controller';
import { callApiNaive, defaultSettings } from 'ui/utils/util';
import { next } from '@ember/runloop';

import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';


export default Controller.extend( {
  access:  service(),
  isAdmin: alias( 'access.admin' ),

  actions: {
    handleShow( id ) {
      this.set( 'formtype', 'deltarequest' );
      callApiNaive( `https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${ id }` ).then( ( response ) => {
        this.set( 'submission', response );
        this.set( 'submissionId', id );
        this.set( 'showModal', false );

        next( () => {
          this.set( 'showModal', true )
        } );
      } );
    },
    gotoProject( id ) {
      callApiNaive( `https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${ id }` ).then( ( submission ) => {
        const url = submission.data.cluster;

        window.location.replace( url );
      } );
    },
    handleDelete( id ) {
      const del = confirm( "Delete Project? This project's logs will be deleted permanently. This is irreversible." );

      if ( del ) {
        callApiNaive( `https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${ id }` ).then( ( submissionValues ) => {
          submissionValues.data.comments = submissionValues.data.comments || '';

          submissionValues.data.addComment = '';
          callApiNaive( `https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${ this.get( 'submissionId' ) }`, defaultSettings( submissionValues, 'put' ) )
        } )
        callApiNaive( `https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${ id }`, defaultSettings( {}, 'delete' ) ).then( () => this.send( 'sessionChanged' ) );
      }
    }
  }

} );
