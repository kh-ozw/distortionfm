const PLATFORMS = [
  {
    name: "Apple Podcasts",
    url: "https://podcasts.apple.com/us/podcast/matsumaru-fm/id1673223077",
    svgViewBox: "0 0 448 512",
    svgPath: "M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-144a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
  },
  {
    name: "Google Podcasts",
    url: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9kYjI4NjUwMC9wb2RjYXN0L3Jzcw",
    svgViewBox: "0 0 50 50",
    svgPath: "M24.5 12L24.5 12c-1.381 0-2.5-1.119-2.5-2.5v-3C22 5.119 23.119 4 24.5 4h0C25.881 4 27 5.119 27 6.5v3C27 10.881 25.881 12 24.5 12zM24.5 47L24.5 47c-1.381 0-2.5-1.119-2.5-2.5v-3c0-1.381 1.119-2.5 2.5-2.5h0c1.381 0 2.5 1.119 2.5 2.5v3C27 45.881 25.881 47 24.5 47zM24.5 36L24.5 36c-1.381 0-2.5-1.119-2.5-2.5v-16c0-1.381 1.119-2.5 2.5-2.5h0c1.381 0 2.5 1.119 2.5 2.5v16C27 34.881 25.881 36 24.5 36zM33.5 12L33.5 12c-1.381 0-2.5 1.119-2.5 2.5v3c0 1.381 1.119 2.5 2.5 2.5h0c1.381 0 2.5-1.119 2.5-2.5v-3C36 13.119 34.881 12 33.5 12zM33.5 23L33.5 23c-1.381 0-2.5 1.119-2.5 2.5v10c0 1.381 1.119 2.5 2.5 2.5h0c1.381 0 2.5-1.119 2.5-2.5v-10C36 24.119 34.881 23 33.5 23zM41.5 21L41.5 21c-1.381 0-2.5 1.119-2.5 2.5v3c0 1.381 1.119 2.5 2.5 2.5h0c1.381 0 2.5-1.119 2.5-2.5v-3C44 22.119 42.881 21 41.5 21zM15.5 38L15.5 38c-1.381 0-2.5-1.119-2.5-2.5v-3c0-1.381 1.119-2.5 2.5-2.5h0c1.381 0 2.5 1.119 2.5 2.5v3C18 36.881 16.881 38 15.5 38zM15.5 27L15.5 27c-1.381 0-2.5-1.119-2.5-2.5v-10c0-1.381 1.119-2.5 2.5-2.5h0c1.381 0 2.5 1.119 2.5 2.5v10C18 25.881 16.881 27 15.5 27zM7.5 21L7.5 21c1.381 0 2.5 1.119 2.5 2.5v3c0 1.381-1.119 2.5-2.5 2.5h0C6.119 29 5 27.881 5 26.5v-3C5 22.119 6.119 21 7.5 21z"
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/1PbcevHJLQQx19Uhf8LkiX",
    svgViewBox: "0 0 496 512",
    svgPath: "M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
  },
];

const Footer = () => {
  return (
    <footer>
      <h1>Subscribe</h1>
      <ul className="pure-menu">
        {PLATFORMS.map((PLATFORM, idx) => (
          <li key={idx} className="pure-menu-item">
            <a href={PLATFORM.url} className="pure-menu-link">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox={PLATFORM.svgViewBox}>
                <path d={PLATFORM.svgPath} />
              </svg>
              {PLATFORM.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;