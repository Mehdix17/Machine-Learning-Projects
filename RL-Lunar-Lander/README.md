# 🌌 Deep Q-Learning – Lunar Lander 🚀

This project is an implementation of **Deep Q-Learning (DQN)** to solve the **Lunar Lander** environment from [OpenAI Gym](https://www.gymlibrary.dev/). The agent learns to land a spacecraft safely between flags using reinforcement learning techniques.

## 🧠 What is Deep Q-Learning?

Deep Q-Learning is an extension of Q-Learning that uses a neural network (Q-network) to approximate the Q-value function, allowing the agent to handle large or continuous state spaces.

In this project, the agent:
- Observes the environment (position, velocity, angle, etc.)
- Selects actions (fire engines or rotate) using an ε-greedy strategy
- Learns from experience using experience replay
- Updates its Q-network to maximize future reward

## 🕹️ Environment: Lunar Lander

- Simulates a spaceship that must land on the Moon's surface between two flags
- State space: 8 continuous variables (position, velocity, angle, etc.)
- Action space: 4 discrete actions (do nothing, fire left engine, fire main engine, fire right engine)
- Goal: Land softly without crashing or flying out of bounds

## 🛠️ Technologies Used

- **Python**
- **NumPy**
- **PyTorch** (for the Q-network)
- **OpenAI Gym**

## 📁 Files

- `main.py` – The main training loop and environment interaction
- `dqn_agent.py` – The DQN Agent class, including the Q-network, memory buffer, and training logic
- `model.py` – The neural network architecture used for Q-value approximation
- `README.md` – You're reading it!

## 🧪 How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/Mehdix17/Deep-Q-Learning---Lunar-Lander.git
   cd Deep-Q-Learning---Lunar-Lander
   ```

2. Install dependencies:
   ```bash
   pip install numpy torch gym matplotlib
   ```

3. Run the training script:
   ```bash
   python main.py
   ```

During training, the agent will improve over episodes and learn to land safely.

## 📈 Output & Results

- The agent learns over time and the total reward increases with training.
- A reward above **200** means the lander consistently lands successfully.
- You can plot scores to visualize learning progress.
