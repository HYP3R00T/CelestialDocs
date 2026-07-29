FROM mcr.microsoft.com/devcontainers/base:ubuntu26.04

COPY --from=jdxcode/mise /usr/local/bin/mise /usr/local/bin/

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        python3 \
        tmux \
    && rm -rf /var/lib/apt/lists/*

# Make sure mise is activated in both zsh and bash. This may be overridden by user dotfiles.
RUN echo 'eval "$(mise activate bash)"' >> /home/vscode/.bashrc && \
    echo 'eval "$(mise activate zsh)"' >> /home/vscode/.zshrc
