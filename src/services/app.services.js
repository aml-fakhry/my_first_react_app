export default class AppServices {
  static async testDataFromApi() {
    return await (
      await fetch('https://jsonplaceholder.typicode.com/users/1')
    ).json();
  }
}

// export default new AppServices()
