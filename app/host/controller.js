import Ember from 'ember';
import DownloadMachineConfig from 'ui/mixins/download-machine-config';
import CattleTransitioningController from 'ui/mixins/cattle-transitioning-controller';

export default Ember.Controller.extend(CattleTransitioningController, DownloadMachineConfig, {
  actions: {
    activate: function() {
      return this.doAction('activate');
    },

    deactivate: function() {
      return this.doAction('deactivate');
    },

    purge: function() {
      return this.doAction('purge');
    },

    newContainer: function() {
      this.transitionToRoute('containers.new', {queryParams: {hostId: this.get('id')}});
    },

    detail: function() {
      this.transitionToRoute('host', this.get('id'));
    },

    clone: function() {
      var machine = this.get('machine');
      var driver = machine.get('driver');
      this.transitionToRoute('hosts.new.'+driver, {queryParams: {machineId: machine.get('id')}});
    },

    edit: function() {
      this.transitionToRoute('host.edit', this.get('id'));
    },
  },

  availableActions: function() {
    var a = this.get('model.actions');

    var out = [
//      { label: 'Add Container', icon: 'ss-plus',      action: 'newContainer', enabled: true,            color: 'text-primary' },
      { label: 'Activate',      icon: 'ss-play',      action: 'activate',     enabled: !!a.activate,    color: 'text-success'},
      { label: 'Deactivate',    icon: 'ss-pause',     action: 'deactivate',   enabled: !!a.deactivate,  color: 'text-danger'},
      { label: 'Delete',        icon: 'ss-trash',     action: 'promptDelete', enabled: !!a.remove, altAction: 'delete', color: 'text-warning' },
      { label: 'Purge',         icon: '',   action: 'purge',        enabled: !!a.purge, color: 'text-danger'},
      { divider: true },
      { label: 'View in API',   icon: '', action: 'goToApi',      enabled: true},
    ];

    if ( this.get('machine') )
    {
      if ( this.get('machine.links.config') )
      {
        out.push({ label: 'Machine Config',   icon: 'ss-download', action: 'machineConfig',      enabled: true});
      }

      out.push({ label: 'Clone',         icon: 'ss-copier',           action: 'clone',        enabled: true });
    }

    out.push({ label: 'Edit',          icon: 'ss-write',            action: 'edit',         enabled: !!a.update });

    return out;
  }.property('model.actions.{activate,deactivate,remove,purge,update}','model.machine','model.machine.links.config'),

});
