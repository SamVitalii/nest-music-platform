# Nest-Music-Platform

Music Platform is a web application that enables users to browse and discover new music, listen to it, and share
their opinions in the comments. The application is built using Nest.js for the backend with MongoDB and Next.js for the frontend.

## Installation and Running the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/SamVitalii/nest-music-platform.git
   ```

2. Install dependencies and run:
   ```bash
   cd nest-music-platform
   ```

  * For server side:
     ```bash
     cd server
     npm install
     ```
     ```bash
     npm run start:dev
     #or
     npm run start:prod
     ```

  * For client side:
     ```bash
     cd client
     npm install
     ```
     ```bash
     npm run dev
     #or
     npm run build
     npm run start
     ```

    Open your browser and go to [localhost:3000](http://localhost:3000)


## Usage

### Main page
When you first open Music Platform, you'll be taken to the main page, which contains greetings, news, and additional information about the website.

### Navigation
The navigation menu can be accessed by clicking the burger menu icon in the top-left corner of the screen. From here, you can access the track list, albums, etc.

### Track list
One of the key features of Music Platform is the ability to browse and play songs from the extensive music library. The songs list displays all available tracks with their covers and allows you to search for them by artist or track name in the search bar at the top of the screen.

### Uploading track
If you're an artist or musician, you can upload your own songs to the platform and share them with others. The application supports different formats and allows you to add whole information and lyrics to your tracks.

### Commenting
In addition to viewing track information by clicking on it, you can also leave comments on tracks to share your thoughts and engage with others in the community. Simply scroll down to the comment section and type in your message.

## Contributing

Pull requests to Music Platform are welcome and I am looking for ways to improve the application. I plan to continue working on the project and 

## License

[MIT](https://github.com/SamVitalii/nest-music-platform/blob/main/LICENSE)
