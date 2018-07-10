/**
 * @author Naveen Gupta
 * @description defining and exporting configuration variables
 *  
 */

 // Container for all environments
 let environments = {};

 // Staging (Default) environment 
 environments.staging = {
       'port': 3000,
    'envName': 'staging'
 };

 // Production environment
 environments.production = {
        'port':  5000,
     'envName': 'production'
 }

 // Determine which environment should be passed to command-line argument 
 const CURRENT_ENVIRONMENT = typeof (process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : '';

 // Checking the current environment is one of the above environments, if not then staging
 const ENVIRONMENT_TO_EXPORT = typeof (environments[CURRENT_ENVIRONMENT]) === 'object' ? environments[CURRENT_ENVIRONMENT] : environments.staging;

 // Exporting the module
 module.exports = ENVIRONMENT_TO_EXPORT;
