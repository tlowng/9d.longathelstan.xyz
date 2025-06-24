import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './members.css';

const membersData = [
  {
    role: "GVCN",
    people: [
      { name: "Lê Hương", link: "https://www.facebook.com/le.huong.135154" }
    ]
  },
  {
    role: "Lớp trưởng",
    people: [
      { name: "Quỳnh Nhi", link: "https://guns.lol/qnyih" }
    ]
  },
  {
    role: "Quàng Tử",
    people: [
      { name: "Anh Dũng", link: "https://www.facebook.com/profile.php?id=100092522056147" },
      { name: "Bảo Nam", link: "https://www.facebook.com/profile.php?id=100082275716427" },
      { name: "Chí Thành", link: "https://www.facebook.com/profile.php?id=100086275664280" },
      { name: "Đức Anh", link: "https://www.facebook.com/profile.php?id=100087907485086" },
      { name: "Đức Huy", link: "https://duchuy.my.canva.site/" },
      { name: "Hoài Nam", link: "https://www.facebook.com/profile.php?id=100095052876030" },
      { name: "Lê Bảo", link: "https://www.facebook.com/profile.php?id=100089624271014" },
      { name: "Lâm Dũng", link: "https://www.facebook.com/profile.php?id=100093062757770" },
      { name: "Quốc Khánh", link: "https://www.facebook.com/profile.php?id=100094393785792" },
      { name: "Thăng Long", link: "https://longathelstan.xyz/" },
      { name: "Tống Bảo", link: "https://www.facebook.com/profile.php?id=100033463548041" },
      { name: "Tuấn Dũng", link: "https://www.instagram.com/d_k2125.nb/" },
      { name: "Tuấn Việt", link: "https://www.facebook.com/profile.php?id=61554240063186" },
      { name: "Việt Anh", link: "https://www.facebook.com/profile.php?id=100087801795292" },
      { name: "Vũ Nguyên", link: "https://www.facebook.com/profile.php?id=100083706210940" }
    ].sort((a, b) => {
      const nameA = a.name.trim().split(' ');
      const nameB = b.name.trim().split(' ');

      const lastNameA = nameA[nameA.length - 1];
      const lastNameB = nameB[nameB.length - 1];

      const lastNameCompare = lastNameA.localeCompare(lastNameB, 'vi');
      if (lastNameCompare !== 0) {
        return lastNameCompare;
      }

      return a.name.localeCompare(b.name, 'vi'); 
    })
  },
  {
    role: "Công Túa",
    people: [
      { name: "Bảo Thi", link: "https://www.facebook.com/profile.php?id=100085023645067" },
      { name: "Diệp Chi", link: "https://www.facebook.com/profile.php?id=100075183973159&mibextid=ZbWKwL" },
      { name: "Diệu Linh", link: "https://www.facebook.com/profile.php?id=100090649365032" },
      { name: "Hà Linh", link: "https://bio.link/nghalinh15210" },
      { name: "Hoàng Linh", link: "https://www.facebook.com/profile.php?id=100082245724082" },
      { name: "Hồng Thắm", link: "https://bio.link/hngthmng" },
      { name: "Huyền Tâm", link: "https://www.facebook.com/profile.php?id=100086672336999" },
      { name: "Khánh Huyền", link: "https://www.facebook.com/profile.php?id=61565436685072" },
      { name: "Khánh Linh", link: "https://www.facebook.com/profile.php?id=100087297836900&mibextid=ZbWKwL" },
      { name: "Kim Ngân", link: "https://www.facebook.com/profile.php?id=100078104345012&mibextid=LQQJ4d" },
      { name: "Lan Phương", link: "https://www.facebook.com/profile.php?id=100078172873518&mibextid=LQQJ4d" },
      { name: "Mai Quyên", link: "https://bio.link/dkrhq2xy" },
      { name: "Minh Giang", link: "https://bio.link/mgianggm" },
      { name: "Thảo Như", link: "https://www.facebook.com/YunoDeyy" },
      { name: "Thảo Vy", link: "https://bio.link/vytran172" },
      { name: "Thu Hiền", link: "https://www.facebook.com/profile.php?id=61562537310757" },
      { name: "Thuỳ Dương", link: "https://www.facebook.com/profile.php?id=61565035449778" }
    ]
  }
];

const Members = (props) => {
  // Filter groups for different layouts
  const horizontalGroups = membersData.filter(group => 
    group.role === "GVCN" || group.role === "Lớp trưởng"
  );
  const studentGroups = membersData.filter(group => 
    group.role === "Quàng Tử" || group.role === "Công Túa"
  );

  return (
    <div className={`members-container10 ${props.rootClassName} `}>
      <div className="members-container11">
        <div className="members-groups-wrapper">
          
          {horizontalGroups.length > 0 && (
            <div className="members-container12">
              {horizontalGroups.map((group, index) => (
                <div className="members-container13" key={index}>
                  <div className="members-container-group">
                    <span className="members-role-text">
                      {group.role}
                    </span>
                    {group.people.map((member, memberIndex) => (
                      <a
                        href={member.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="member-item-link"
                        key={memberIndex}
                      >
                        <div className="member-item">
                          <div className="member-content">
                            <span className="member-name">
                              {member.name}
                            </span>
                          </div>
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            className="member-icon"
                          >
                            <path
                              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {studentGroups.length > 0 && (
            <div className="members-container12">
              {studentGroups.map((group, index) => (
                <div className="members-container13" key={index}>
                  <div className="members-container-group">
                    <span className="members-role-text">
                      {group.role}
                    </span>
                    {group.people.map((member, memberIndex) => (
                      <a
                        href={member.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="member-item-link"
                        key={memberIndex}
                      >
                        <div className="member-item">
                          <div className="member-content">
                            <span className="member-name">
                              {member.name}
                            </span>
                          </div>
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            className="member-icon"
                          >
                            <path
                              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
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