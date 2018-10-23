module.exports = {
    hooks: {
        readPackage: (packageJson, context) => {
            console.log('hooks: readPackage(): called...')
            return packageJson
        }
    }
}
