import React, { useEffect } from "react";
import { useSelector } from "react-redux";

var WebTorrent = require("webtorrent");

const PlayMovie = () => {
  const selectedMovieObj = useSelector((state) => state.selected.data);
  const { movie, url } = selectedMovieObj;
  let client;
  useEffect(() => {
    // returned function will be called on component unmount
    return () => {
      client.destroy();
      let movieDiv = document.getElementById("movie-div");
      movieDiv.innerHTML = "";
    };
  }, [client]);
  if (url || movie) {
    client = new WebTorrent();
    var torrentId = "https://webtorrent.io/torrents/sintel.torrent";
    client.add(torrentId, function (torrent) {
      var file = torrent.files.find(function (file) {
        return file.name.endsWith(".mp4");
      });
      file.appendTo("#movie-div");
    });
  }
  return <></>;
};

export default PlayMovie;
