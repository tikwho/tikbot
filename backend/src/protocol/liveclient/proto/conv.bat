pbjs -t static-module -w commonjs -o tiktokSchema.js tiktokSchema.proto

pbts -o tiktokSchema.d.ts tiktokSchema.js