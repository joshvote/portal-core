Ext.define('portal.widgets.field.clearabletextfield', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.clearabletextfield',
    initComponent: function () {
        var me = this;

        me.triggerCls = 'x-form-clear-trigger'; 

        me.callParent(arguments);
    },
    
    onTriggerClick: function() {
        this.setRawValue('');
    }
});