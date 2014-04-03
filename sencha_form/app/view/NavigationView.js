/*
 * File: app/view/NavigationView.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
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

Ext.define('raxa.view.NavigationView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.navigationview',

    requires: [
        'raxa.view.WelcomePanel',
        'Ext.navigation.Bar',
        'Ext.Button',
        'Ext.tab.Panel'
    ],

    config: {
        fullscreen: true,
        itemId: 'navigationview',
        navigationBar: {
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    itemId: 'listLocationsButton',
                    iconCls: 'more'
                },
                {
                    xtype: 'button',
                    align: 'right',
                    itemId: 'addLocationButton',
                    iconCls: 'add'
                }
            ]
        },
        items: [
            {
                xtype: 'welcomePanel'
            }
        ]
    }

});