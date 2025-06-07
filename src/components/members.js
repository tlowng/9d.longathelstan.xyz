import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './members.css';

// Define the member data structure
const membersData = [
  {
    role: "Lớp trưởng",
    people: [
      { name: "Quỳnh Nhi", link: "https://guns.lol/qnyih" }
    ]
  },
  {
    role: "Website owner",
    people: [
      { name: "Thăng Long", link: "https://longathelstan.xyz/" }
    ]
  },
  {
    role: "Quàng Tử",
    people: [
      { name: "Đức Anh", link: "https://www.facebook.com/profile.php?id=100087907485086" },
      { name: "Việt Anh", link: "https://www.facebook.com/profile.php?id=100087801795292" },
      { name: "Lê Bảo", link: "https://www.facebook.com/profile.php?id=100089624271014" },
      { name: "Tống Bảo", link: "https://www.facebook.com/profile.php?id=100033463548041" },
      { name: "Xuân Bình", link: "https://www.facebook.com/profile.php?id=100012665404786" },
      { name: "Lâm Dũng", link: "https://www.facebook.com/profile.php?id=100093062757770" },
      { name: "Anh Dũng", link: "https://www.facebook.com/profile.php?id=100092522056147" },
      { name: "Tuấn Dũng", link: "https://www.instagram.com/d_k2125.nb/" }, // Note: This link might be incorrect based on original code pattern
      { name: "Đức Huy", link: "https://duchuy.my.canva.site/" },
      { name: "Quốc Khánh", link: "https://www.facebook.com/profile.php?id=100094393785792" },
      { name: "Bảo Nam", link: "https://www.facebook.com/profile.php?id=100082275716427" },
      { name: "Hoài Nam", link: "https://www.facebook.com/profile.php?id=100095052876030" },
      { name: "Vũ Nguyên", link: "https://www.facebook.com/profile.php?id=100083706210940" },
      { name: "Chí Thành", link: "https://www.facebook.com/profile.php?id=100086275664280" },
      { name: "Tuấn Việt", link: "https://www.facebook.com/profile.php?id=61554240063186" }
    ]
  },
  {
    role: "Công Túa",
    people: [
      { name: "Diệp Chi", link: "https://www.facebook.com/profile.php?id=100075183973159&mibextid=ZbWKwL" },
      { name: "Thuỳ Dương", link: "https://www.facebook.com/profile.php?id=61565035449778" },
      { name: "Minh Giang", link: "https://bio.link/mgianggm" },
      { name: "Thu Hiền", link: "https://www.facebook.com/profile.php?id=61562537310757" },
      { name: "Khánh Huyền", link: "https://www.facebook.com/profile.php?id=61565436685072" },
      { name: "Hà Linh", link: "https://bio.link/nghalinh15210" },
      { name: "Bảo Thi", link: "https://www.facebook.com/profile.php?id=100085023645067" },
      { name: "Hoàng Linh", link: "https://www.facebook.com/profile.php?id=100082245724082" },
      { name: "Diệu Linh", link: "https://www.facebook.com/profile.php?id=100090649365032" },
      { name: "Kim Ngân", link: "https://www.facebook.com/profile.php?id=100078104345012&mibextid=LQQJ4d" },
      { name: "Thảo Như", link: "https://www.facebook.com/YunoDeyy" },
      { name: "Lan Phương", link: "https://www.facebook.com/profile.php?id=100078172873518&mibextid=LQQJ4d" },
      { name: "Mai Quyên", link: "https://bio.link/dkrhq2xy" },
      { name: "Huyền Tâm", link: "https://www.facebook.com/profile.php?id=100086672336999" },
      { name: "Hồng Thắm", link: "https://bio.link/hngthmng" },
      { name: "Khánh Linh", link: "https://www.facebook.com/profile.php?id=100087297836900&mibextid=ZbWKwL" },
      { name: "Thảo Vy", link: "https://bio.link/vytran172" }
    ]
  }
];

const Members = (props) => {
  return (
    <div className={`members-container10 ${props.rootClassName} `}>
      <div className="members-container11">
        {membersData.map((group, index) => (
          <div className="members-container-group" key={index}> {/* Added a container for each group */}
            <span className="members-role-text"> {/* Added a span for the role text */}
              {group.role}
            </span>
            {group.people.map((member, memberIndex) => (
              <a
                href={member.link}
                target="_blank"
                rel="noreferrer noopener"
                className="members-link"
                key={memberIndex}
              >
                <div className="members-container-member"> {/* Added a container for each member */}
                  <div className="members-container-name"> {/* Added a container for the name */}
                    <span className="members-name-text"> {/* Added a span for the name text */}
                      {member.name}
                    </span>
                  </div>
                  {/* SVG Icon - Keep or remove based on desired design */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    className="members-icon"
                  >
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

Members.defaultProps = {
  rootClassName: '',
}

Members.propTypes = {
  rootClassName: PropTypes.string,
}

export default Members;
