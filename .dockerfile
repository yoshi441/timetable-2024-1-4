FROM arch

LABEL version = "0.1.0"
LABEL name = "mocomoco-docker-test"

RUN pacman -Syu && pacman -S git nodejs pnpm
RUN git clone https://github.com/haru-0205/timetable-2e.git
RUN pnpm i
RUN pnpm dev
