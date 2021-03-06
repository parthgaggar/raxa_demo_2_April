/*
 * File: app/view/sortList.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('raxa.view.sortList', {
    extend: 'Ext.Panel',
    alias: 'widget.sort',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Radio'
    ],

    config: {
        items: [
            {
                xtype: 'fieldset',
                id: 'sort',
                title: 'Group By',
                items: [
                    {
                        xtype: 'radiofield',
                        id: 'sortHospital',
                        label: 'Hospital',
                        labelWidth: '50%',
                        labelWrap: true,
                        name: 'group',
                        checked: true
                    },
                    {
                        xtype: 'radiofield',
                        id: 'sortSpecialization',
                        label: 'Specialization',
                        labelWidth: '50%',
                        labelWrap: true,
                        name: 'group'
                    },
                    {
                        xtype: 'radiofield',
                        id: 'sortState',
                        label: 'State',
                        labelWidth: '50%',
                        labelWrap: true,
                        name: 'group'
                    },
                    {
                        xtype: 'radiofield',
                        id: 'sortCity',
                        label: 'City',
                        labelWidth: '50%',
                        labelWrap: true,
                        name: 'group'
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();
    }

});