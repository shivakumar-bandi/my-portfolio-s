import React from 'react';
import './GitHub.css'; // Import your CSS file

const GitHub = () => {
    return (
        <div className="github-container">
            {/* Contribution Graph */}
            <div className="contribution-graph">
                <h2>281 contributions in the last year</h2>
                <img src="/images/graph.png" alt="Contribution Graph" />
            </div>

            {/* GitHub Stats Card */}
            <div className="card">
                <h2>shiva kumar's GitHub Stats</h2>
                <div className="stats-info">
                    <div className="stat-item">
                        <p>Total Stars Earned:</p>
                        <span>0</span>
                    </div>
                    <div className="stat-item">
                        <p>Total Commits (2024):</p>
                        <span>268</span>
                    </div>
                    <div className="stat-item">
                        <p>Total PRs:</p>
                        <span>0</span>
                    </div>
                    <div className="stat-item">
                        <p>Total Issues:</p>
                        <span>0</span>
                    </div>
                    <div className="stat-item">
                        <p>Contributed to (last year):</p>
                        <span>0</span>
                    </div>
                    <div className="progress-circle">
                        <div className="circle">
                            <div className="circle-inner">C</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contributions Card */}
            <div className="card">
                <div className="contributions-info">
                    <h3>286</h3>
                    <p>Total Contributions</p>
                    <p>Jan 4, 2023 - Present</p>
                </div>
                <div className="streak-section">
                    <div className="streak-item">
                        <p>Current Streak</p>
                        <h3>8</h3>
                        <p>Aug 2 - Aug 9</p>
                    </div>
                    <div className="streak-item">
                        <p>Longest Streak</p>
                        <h3>8</h3>
                        <p>Jul 18 - Jul 25</p>
                    </div>
                </div>
            </div>

            {/* Most Used Languages Card */}
            <div className="card">
                <h3>Most Used Languages</h3>
                <div className="language-bar">
                    <div className="html-bar" style={{ width: "80%" }}></div>
                    <div className="css-bar" style={{ width: "85%" }}></div>
                    <div className="js-bar" style={{ width: "60%" }}></div>
                    <div className="react-bar" style={{ width: "70%" }}></div>
                    <div className="mern-bar" style={{ width: "65%" }}></div>
                </div>
                <div className="language-labels">
                    <span>HTML 80%</span>
                    <span>CSS 85%</span>
                    <span>JavaScript 60%</span>
                    <span>React 70%</span>
                    <span>MERN 65%</span>
                </div>
            </div>
        </div>
    );
};

export default GitHub;
