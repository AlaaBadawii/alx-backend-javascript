/**
 * Contains the miscellaneous route handlers.
 * @author Karim Awudulai <https://github.com/KingStaff>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
