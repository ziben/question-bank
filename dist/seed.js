"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var defaultUser, categories, subjects, grades, sources, questionTypes, difficulties, questions, i, type, difficulty, categoryId, subjectId, gradeId, sourceId, questionData, _i, questions_1, question;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // 清理现有数据
                return [4 /*yield*/, prisma.question.deleteMany()];
                case 1:
                    // 清理现有数据
                    _a.sent();
                    return [4 /*yield*/, prisma.category.deleteMany()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma.subject.deleteMany()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, prisma.grade.deleteMany()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, prisma.source.deleteMany()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, prisma.user.deleteMany()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                username: 'admin',
                                email: 'admin@example.com',
                                password: 'admin123', // 在实际应用中应该使用加密的密码
                                name: '管理员'
                            }
                        })];
                case 7:
                    defaultUser = _a.sent();
                    return [4 /*yield*/, Promise.all([
                            prisma.category.create({
                                data: {
                                    name: '基础知识',
                                    creatorId: defaultUser.id,
                                    updaterId: defaultUser.id
                                }
                            }),
                            prisma.category.create({
                                data: {
                                    name: '编程实践',
                                    creatorId: defaultUser.id,
                                    updaterId: defaultUser.id
                                }
                            }),
                            prisma.category.create({
                                data: {
                                    name: '算法与数据结构',
                                    creatorId: defaultUser.id,
                                    updaterId: defaultUser.id
                                }
                            })
                        ])];
                case 8:
                    categories = _a.sent();
                    return [4 /*yield*/, Promise.all([
                            prisma.subject.create({
                                data: {
                                    name: 'JavaScript',
                                    creatorId: defaultUser.id,
                                    updaterId: defaultUser.id
                                }
                            }),
                            prisma.subject.create({
                                data: {
                                    name: 'Python',
                                    creatorId: defaultUser.id,
                                    updaterId: defaultUser.id
                                }
                            }),
                            prisma.subject.create({
                                data: {
                                    name: 'Java',
                                    creatorId: defaultUser.id,
                                    updaterId: defaultUser.id
                                }
                            })
                        ])];
                case 9:
                    subjects = _a.sent();
                    return [4 /*yield*/, Promise.all([
                            prisma.grade.create({
                                data: {
                                    name: '初级',
                                    creatorId: defaultUser.id,
                                    updaterId: defaultUser.id
                                }
                            }),
                            prisma.grade.create({
                                data: {
                                    name: '中级',
                                    creatorId: defaultUser.id,
                                    updaterId: defaultUser.id
                                }
                            }),
                            prisma.grade.create({
                                data: {
                                    name: '高级',
                                    creatorId: defaultUser.id,
                                    updaterId: defaultUser.id
                                }
                            })
                        ])];
                case 10:
                    grades = _a.sent();
                    return [4 /*yield*/, Promise.all([
                            prisma.source.create({
                                data: {
                                    name: '原创题目',
                                    creatorId: defaultUser.id,
                                    updaterId: defaultUser.id
                                }
                            }),
                            prisma.source.create({
                                data: {
                                    name: '面试真题',
                                    creatorId: defaultUser.id,
                                    updaterId: defaultUser.id
                                }
                            })
                        ])];
                case 11:
                    sources = _a.sent();
                    questionTypes = ['multiple_choice', 'true_false', 'essay'];
                    difficulties = [1, 2, 3, 4, 5];
                    questions = [];
                    for (i = 1; i <= 120; i++) {
                        type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
                        difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
                        categoryId = categories[Math.floor(Math.random() * categories.length)].id;
                        subjectId = subjects[Math.floor(Math.random() * subjects.length)].id;
                        gradeId = grades[Math.floor(Math.random() * grades.length)].id;
                        sourceId = sources[Math.floor(Math.random() * sources.length)].id;
                        questionData = {
                            title: "\u6D4B\u8BD5\u9898\u76EE ".concat(i),
                            content: "\u8FD9\u662F\u7B2C ".concat(i, " \u4E2A\u6D4B\u8BD5\u9898\u76EE\u7684\u5185\u5BB9"),
                            type: type,
                            difficulty: difficulty,
                            answer: '',
                            tags: JSON.stringify(['测试', "\u7C7B\u578B".concat(type)]),
                            categoryId: categoryId,
                            subjectId: subjectId,
                            gradeId: gradeId,
                            sourceId: sourceId,
                            userId: defaultUser.id,
                            updaterId: defaultUser.id,
                        };
                        // 根据题目类型设置不同的选项和答案
                        switch (type) {
                            case 'multiple_choice':
                                questionData.options = JSON.stringify(['选项A', '选项B', '选项C', '选项D']);
                                questionData.answer = String(Math.floor(Math.random() * 4));
                                questionData.content = "\u4E0B\u9762\u54EA\u4E2A\u9009\u9879\u662F\u6B63\u786E\u7684\uFF1F\nA. \u9009\u9879A\nB. \u9009\u9879B\nC. \u9009\u9879C\nD. \u9009\u9879D";
                                break;
                            case 'true_false':
                                questionData.answer = Math.random() < 0.5 ? 'true' : 'false';
                                questionData.content = "\u5224\u65AD\u4E0B\u9762\u7684\u8BF4\u6CD5\u662F\u5426\u6B63\u786E\uFF1A\n\u8FD9\u662F\u4E00\u4E2A\u5224\u65AD\u9898\u9648\u8FF0\u3002";
                                break;
                            case 'essay':
                                questionData.answer = '这是一个示例答案，详细说明了解题思路和过程。';
                                questionData.content = "\u8BF7\u56DE\u7B54\u4EE5\u4E0B\u95EE\u9898\uFF1A\n\u8FD9\u662F\u4E00\u9053\u4E3B\u89C2\u9898\uFF0C\u9700\u8981\u8BE6\u7EC6\u8BF4\u660E\u4F60\u7684\u601D\u8003\u8FC7\u7A0B\u3002";
                                break;
                        }
                        questions.push(questionData);
                    }
                    _i = 0, questions_1 = questions;
                    _a.label = 12;
                case 12:
                    if (!(_i < questions_1.length)) return [3 /*break*/, 15];
                    question = questions_1[_i];
                    return [4 /*yield*/, prisma.question.create({
                            data: question
                        })];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14:
                    _i++;
                    return [3 /*break*/, 12];
                case 15:
                    console.log('Seed data created successfully');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
