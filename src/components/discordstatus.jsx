import React, { useState, useEffect } from 'react';

import './discordstatus.css'

const userID = '1275661316761059339'; // Change this to your Discord user ID

const DiscordStatus = () => {
  const [discordData, setDiscordData] = useState(null);

  const fetchDiscordStatus = async () => {
    try {
      const response = await fetch(`https://api.lanyard.rest/v1/users/${userID}`);
      const { data } = await response.json();
      setDiscordData(data);
    } catch (error) {
      console.error('Unable to retrieve Discord status:', error);
    }
  };

  useEffect(() => {
    fetchDiscordStatus();
    const interval = setInterval(fetchDiscordStatus, 6000);
    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach((tooltip) => {
      tooltip.addEventListener('mouseenter', () => {
        const ariaLabel = tooltip.getAttribute('aria-label');
        tooltip.setAttribute('data-tooltip-content', ariaLabel);
      });

      tooltip.addEventListener('mouseleave', () => {
        tooltip.removeAttribute('data-tooltip-content');
      });
    });

    const anchors = document.getElementsByTagName('a');
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const href = anchor.getAttribute('href');
      if (href) {
        anchor.setAttribute('title', href);
      }
    }
  }, [discordData]);

  if (!discordData) {
    return <div className="custom-status"><span className="custom-status-text">Viết gì đây taa...</span></div>;
  }

  const {
    discord_status,
    activities,
    discord_user: { avatar, avatar_decoration_data, display_name, username },
  } = discordData;

  const avatarImageURL = avatar;
  const avatarDecorationAsset = avatar_decoration_data?.asset;
  const customStatus = activities?.[0] || {};
  const emoji = customStatus.emoji;

  let statusImagePath;
  switch (discord_status) {
    case 'online':
      statusImagePath = './public/status/online.svg';
      break;
    case 'idle':
      statusImagePath = './public/status/idle.svg';
      break;
    case 'dnd':
      statusImagePath = './public/status/dnd.svg';
      break;
    case 'offline':
      statusImagePath = './public/status/offline.svg';
      break;
    default:
      statusImagePath = './public/status/offline.svg';
      break;
  }

  if (
    activities?.some(
      (activity) =>
        activity.type === 1 &&
        (activity.url.includes('twitch.tv') || activity.url.includes('youtube.com'))
    )
  ) {
    statusImagePath = './public/status/streaming.svg';
  }

  return (
    <div>
      {customStatus.state || emoji ? (
        <div className="custom-status">
          {emoji && (
            <img
              id="custom-status-emoji"
              className="custom-status-emoji"
              alt="Custom Status Emoji"
              src={`https://cdn.discordapp.com/emojis/${emoji.id}?format=webp&size=24&quality=lossless`}
            />
          )}
          <span className="custom-status-text">{customStatus.state || 'Not doing anything!'}</span>
        </div>
      ) : null}
      {!customStatus.state ? (
        <div className="custom-status">
          <span className="custom-status-text">we are tryhard🔥</span>
        </div>
      ): null}
    </div>
  );
};

export default DiscordStatus;
