/*
 * File: app/view/mainTool.js
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

Ext.define('raxa.view.mainTool', {
    extend: 'Ext.Panel',
    alias: 'widget.mainTool',

    requires: [
        'Ext.field.Search',
        'Ext.Button'
    ],

    config: {
        height: '5%',
        items: [
            {
                xtype: 'searchfield',
                docked: 'left',
                id: 'mainSearch',
                left: 'true',
                labelWidth: '100%',
                placeHolder: 'find location'
            },
            {
                xtype: 'button',
                docked: 'left',
                id: 'filter1',
                ui: 'confirm',
                text: 'filter'
            }
        ]
    }

});