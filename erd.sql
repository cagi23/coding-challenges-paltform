CREATE TABLE Developer_Level (
    level_id SERIAL PRIMARY KEY,
    level_name VARCHAR(50) NOT NULL,
    min_xp_required INT NOT NULL,
    max_xp_required INT NOT NULL
);

CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    level_id INT REFERENCES Developer_Level(level_id),
    xp_points INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Challenge (
    challenge_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    xp_reward INT NOT NULL,
    framework VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL
);

CREATE TABLE Competition (
    competition_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    xp_multiplier FLOAT DEFAULT 1.0
);

CREATE TABLE User_Challenge (
    user_challenge_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    challenge_id INT REFERENCES Challenge(challenge_id),
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    xp_earned INT NOT NULL
);

CREATE TABLE User_Competition (
    user_competition_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    competition_id INT REFERENCES Competition(competition_id),
    xp_earned INT NOT NULL
);
