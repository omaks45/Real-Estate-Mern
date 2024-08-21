/**
 * Test function for API endpoint.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with a message.
 */
export const test = (req, res) => {
    res.json({
        message: 'Hello world'
    })
}