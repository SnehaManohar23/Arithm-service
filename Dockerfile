FROM node:20.11.0-alpine

WORKDIR /arithmetic-service
# COPY index.html /arithmetic-service/public
# COPY index.js /arithmetic-service/src/index
COPY package*.json/ /arithmetic-service
RUN npm ci --omit=dev
COPY ./ /arithmetic-service/src

CMD ["npm","start"]

EXPOSE 80

# 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
# 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
# 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
# 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