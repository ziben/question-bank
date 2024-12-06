import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 清理现有数据
  await prisma.questionTag.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.tagCategory.deleteMany();
  await prisma.rolePermission.deleteMany();
  await prisma.userRole.deleteMany();
  await prisma.permission.deleteMany();
  await prisma.role.deleteMany();
  await prisma.question.deleteMany();
  await prisma.category.deleteMany();
  await prisma.subject.deleteMany();
  await prisma.grade.deleteMany();
  await prisma.source.deleteMany();
  await prisma.user.deleteMany();

  // 创建一个默认用户
  const defaultUser = await prisma.user.create({
    data: {
      username: 'admin',
      email: 'admin@example.com',
      password: 'admin123', // 在实际应用中应该使用加密的密码
      name: '管理员'
    }
  });

  // 创建权限
  const permissions = await Promise.all([
    // 用户管理权限
    prisma.permission.create({
      data: {
        name: 'user.create',
        description: '创建用户',
        createdBy: { connect: { id: defaultUser.id } },
        updatedBy: { connect: { id: defaultUser.id } }
      }
    }),
    prisma.permission.create({
      data: {
        name: 'user.read',
        description: '查看用户',
        createdBy: { connect: { id: defaultUser.id } },
        updatedBy: { connect: { id: defaultUser.id } }
      }
    }),
    prisma.permission.create({
      data: {
        name: 'user.update',
        description: '更新用户',
        createdBy: { connect: { id: defaultUser.id } },
        updatedBy: { connect: { id: defaultUser.id } }
      }
    }),
    prisma.permission.create({
      data: {
        name: 'user.delete',
        description: '删除用户',
        createdBy: { connect: { id: defaultUser.id } },
        updatedBy: { connect: { id: defaultUser.id } }
      }
    }),
    // 题目管理权限
    prisma.permission.create({
      data: {
        name: 'question.create',
        description: '创建题目',
        createdBy: { connect: { id: defaultUser.id } },
        updatedBy: { connect: { id: defaultUser.id } }
      }
    }),
    prisma.permission.create({
      data: {
        name: 'question.read',
        description: '查看题目',
        createdBy: { connect: { id: defaultUser.id } },
        updatedBy: { connect: { id: defaultUser.id } }
      }
    }),
    prisma.permission.create({
      data: {
        name: 'question.update',
        description: '更新题目',
        createdBy: { connect: { id: defaultUser.id } },
        updatedBy: { connect: { id: defaultUser.id } }
      }
    }),
    prisma.permission.create({
      data: {
        name: 'question.delete',
        description: '删除题目',
        createdBy: { connect: { id: defaultUser.id } },
        updatedBy: { connect: { id: defaultUser.id } }
      }
    })
  ]);

  // 创建角色
  const roles = await Promise.all([
    // 超级管理员
    prisma.role.create({
      data: {
        name: '超级管理员',
        description: '拥有所有权限的管理员',
        createdBy: { connect: { id: defaultUser.id } },
        updatedBy: { connect: { id: defaultUser.id } },
        permissions: {
          create: permissions.map(permission => ({
            permission: { connect: { id: permission.id } },
            createdAt: new Date(),
            updatedAt: new Date()
          }))
        }
      }
    }),
    // 普通管理员
    prisma.role.create({
      data: {
        name: '管理员',
        description: '拥有部分管理权限的管理员',
        createdBy: { connect: { id: defaultUser.id } },
        updatedBy: { connect: { id: defaultUser.id } },
        permissions: {
          create: permissions
            .filter(p => !p.name.startsWith('user.'))
            .map(permission => ({
              permission: { connect: { id: permission.id } },
              createdAt: new Date(),
              updatedAt: new Date()
            }))
        }
      }
    }),
    // 普通用户
    prisma.role.create({
      data: {
        name: '普通用户',
        description: '只能查看题目的普通用户',
        createdBy: { connect: { id: defaultUser.id } },
        updatedBy: { connect: { id: defaultUser.id } },
        permissions: {
          create: permissions
            .filter(p => p.name === 'question.read')
            .map(permission => ({
              permission: { connect: { id: permission.id } },
              createdAt: new Date(),
              updatedAt: new Date()
            }))
        }
      }
    })
  ]);

  // 为默认用户分配超级管理员角色
  await prisma.userRole.create({
    data: {
      user: { connect: { id: defaultUser.id } },
      role: { connect: { id: roles[0].id } }
    }
  });

  // 创建基础分类数据
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: '基础知识',
        createdBy: {
          connect: { id: defaultUser.id }
        },
        updatedBy: {
          connect: { id: defaultUser.id }
        }
      }
    }),
    prisma.category.create({
      data: {
        name: '编程实践',
        createdBy: {
          connect: { id: defaultUser.id }
        },
        updatedBy: {
          connect: { id: defaultUser.id }
        }
      }
    }),
    prisma.category.create({
      data: {
        name: '算法与数据结构',
        createdBy: {
          connect: { id: defaultUser.id }
        },
        updatedBy: {
          connect: { id: defaultUser.id }
        }
      }
    })
  ]);

  // 创建学科数据
  const subjects = await Promise.all([
    prisma.subject.create({
      data: {
        name: 'JavaScript',
        createdBy: {
          connect: { id: defaultUser.id }
        },
        updatedBy: {
          connect: { id: defaultUser.id }
        }
      }
    }),
    prisma.subject.create({
      data: {
        name: 'Python',
        createdBy: {
          connect: { id: defaultUser.id }
        },
        updatedBy: {
          connect: { id: defaultUser.id }
        }
      }
    }),
    prisma.subject.create({
      data: {
        name: 'Java',
        createdBy: {
          connect: { id: defaultUser.id }
        },
        updatedBy: {
          connect: { id: defaultUser.id }
        }
      }
    })
  ]);

  // 创建年级数据
  const grades = await Promise.all([
    prisma.grade.create({
      data: {
        name: '初级',
        createdBy: {
          connect: { id: defaultUser.id }
        },
        updatedBy: {
          connect: { id: defaultUser.id }
        }
      }
    }),
    prisma.grade.create({
      data: {
        name: '中级',
        createdBy: {
          connect: { id: defaultUser.id }
        },
        updatedBy: {
          connect: { id: defaultUser.id }
        }
      }
    }),
    prisma.grade.create({
      data: {
        name: '高级',
        createdBy: {
          connect: { id: defaultUser.id }
        },
        updatedBy: {
          connect: { id: defaultUser.id }
        }
      }
    })
  ]);

  // 创建来源数据
  const sources = await Promise.all([
    prisma.source.create({
      data: {
        name: '原创题目',
        type: 'INSTITUTION',
        createdBy: {
          connect: { id: defaultUser.id }
        },
        updatedBy: {
          connect: { id: defaultUser.id }
        }
      }
    }),
    prisma.source.create({
      data: {
        name: '面试真题',
        type: 'INSTITUTION',
        createdBy: {
          connect: { id: defaultUser.id }
        },
        updatedBy: {
          connect: { id: defaultUser.id }
        }
      }
    })
  ]);

  // 创建标签类别
  const tagCategories = await Promise.all([
    // 来源
    prisma.tagCategory.create({
      data: {
        name: '来源',
        code: 'source',
        description: '题目的来源',
        allowMultiple: false,
        sortOrder: 1,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    // 难度
    prisma.tagCategory.create({
      data: {
        name: '难度',
        code: 'difficulty',
        description: '题目的难度等级',
        allowMultiple: false,
        sortOrder: 2,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    // 题类
    prisma.tagCategory.create({
      data: {
        name: '题类',
        code: 'question_type',
        description: '题目的类型',
        allowMultiple: false,
        sortOrder: 3,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    // 省份
    prisma.tagCategory.create({
      data: {
        name: '省份',
        code: 'province',
        description: '题目所属省份',
        allowMultiple: false,
        sortOrder: 4,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    // 年份
    prisma.tagCategory.create({
      data: {
        name: '年份',
        code: 'year',
        description: '题目的年份',
        allowMultiple: false,
        sortOrder: 5,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    // 学科素养
    prisma.tagCategory.create({
      data: {
        name: '学科素养',
        code: 'literacy',
        description: '题目考察的学科素养',
        allowMultiple: true,
        sortOrder: 6,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    // 命题特征
    prisma.tagCategory.create({
      data: {
        name: '命题特征',
        code: 'feature',
        description: '题目的命题特征',
        allowMultiple: true,
        sortOrder: 7,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
  ])

  const [sourceCategory, difficultyCategory, questionTypeCategory, provinceCategory, yearCategory, literacyCategory, featureCategory] = tagCategories

  // 创建标签
  // 1. 来源标签
  const examTag = await prisma.tag.create({
    data: {
      name: '试卷',
      code: 'exam',
      categoryId: sourceCategory.id,
      sortOrder: 1,
      createdById: defaultUser.id,
      updatedById: defaultUser.id,
    },
  })

  await Promise.all([
    prisma.tag.create({
      data: {
        name: '高考真题',
        code: 'gaokao',
        categoryId: sourceCategory.id,
        parentId: examTag.id,
        sortOrder: 1,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    prisma.tag.create({
      data: {
        name: '模拟试题',
        code: 'mock',
        categoryId: sourceCategory.id,
        parentId: examTag.id,
        sortOrder: 2,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
  ])

  // 2. 难度标签
  await Promise.all([
    prisma.tag.create({
      data: {
        name: '简单',
        code: 'easy',
        categoryId: difficultyCategory.id,
        sortOrder: 1,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    prisma.tag.create({
      data: {
        name: '中等',
        code: 'medium',
        categoryId: difficultyCategory.id,
        sortOrder: 2,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    prisma.tag.create({
      data: {
        name: '困难',
        code: 'hard',
        categoryId: difficultyCategory.id,
        sortOrder: 3,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
  ])

  // 3. 题类标签
  await Promise.all([
    prisma.tag.create({
      data: {
        name: '选择题',
        code: 'choice',
        categoryId: questionTypeCategory.id,
        sortOrder: 1,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    prisma.tag.create({
      data: {
        name: '填空题',
        code: 'blank',
        categoryId: questionTypeCategory.id,
        sortOrder: 2,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    prisma.tag.create({
      data: {
        name: '解答题',
        code: 'solution',
        categoryId: questionTypeCategory.id,
        sortOrder: 3,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
  ])

  // 4. 省份标签（示例添加几个省份）
  await Promise.all([
    prisma.tag.create({
      data: {
        name: '北京',
        code: 'beijing',
        categoryId: provinceCategory.id,
        sortOrder: 1,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    prisma.tag.create({
      data: {
        name: '上海',
        code: 'shanghai',
        categoryId: provinceCategory.id,
        sortOrder: 2,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    prisma.tag.create({
      data: {
        name: '江苏',
        code: 'jiangsu',
        categoryId: provinceCategory.id,
        sortOrder: 3,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
  ])

  // 5. 年份标签（最近几年）
  await Promise.all([
    prisma.tag.create({
      data: {
        name: '2024',
        code: '2024',
        categoryId: yearCategory.id,
        sortOrder: 1,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    prisma.tag.create({
      data: {
        name: '2023',
        code: '2023',
        categoryId: yearCategory.id,
        sortOrder: 2,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    prisma.tag.create({
      data: {
        name: '2022',
        code: '2022',
        categoryId: yearCategory.id,
        sortOrder: 3,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
  ])

  // 6. 学科素养标签
  await Promise.all([
    prisma.tag.create({
      data: {
        name: '科学思维',
        code: 'scientific_thinking',
        categoryId: literacyCategory.id,
        sortOrder: 1,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    prisma.tag.create({
      data: {
        name: '实践能力',
        code: 'practical_ability',
        categoryId: literacyCategory.id,
        sortOrder: 2,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    prisma.tag.create({
      data: {
        name: '创新意识',
        code: 'innovation',
        categoryId: literacyCategory.id,
        sortOrder: 3,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
  ])

  // 7. 命题特征标签
  await Promise.all([
    prisma.tag.create({
      data: {
        name: '综合性',
        code: 'comprehensive',
        categoryId: featureCategory.id,
        sortOrder: 1,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    prisma.tag.create({
      data: {
        name: '新颖性',
        code: 'novel',
        categoryId: featureCategory.id,
        sortOrder: 2,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
    prisma.tag.create({
      data: {
        name: '实践性',
        code: 'practical',
        categoryId: featureCategory.id,
        sortOrder: 3,
        createdById: defaultUser.id,
        updatedById: defaultUser.id,
      },
    }),
  ])

  // 生成题目数据
  const questionTypes = ['multiple_choice', 'true_false', 'essay'];
  const difficulties = [1, 2, 3, 4, 5];

  for (let i = 0; i < 20; i++) {
    const type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
    
    // 根据题目类型创建对应的标签
    const typeTag = await prisma.tag.findFirst({
      where: {
        categoryId: questionTypeCategory.id,
        code: type === 'multiple_choice' ? 'choice' : 
              type === 'true_false' ? 'blank' : 'solution'
      }
    });

    // 根据难度创建对应的标签
    const difficultyTag = await prisma.tag.findFirst({
      where: {
        categoryId: difficultyCategory.id,
        code: difficulty <= 2 ? 'easy' : 
              difficulty <= 4 ? 'medium' : 'hard'
      }
    });

    // 随机选择一个来源标签
    const sourceTag = await prisma.tag.findFirst({
      where: {
        categoryId: sourceCategory.id,
        parentId: examTag.id,
      },
      skip: Math.floor(Math.random() * 2)
    });

    // 随机选择一个省份标签
    const provinceTag = await prisma.tag.findFirst({
      where: {
        categoryId: provinceCategory.id,
      },
      skip: Math.floor(Math.random() * 3)
    });

    // 随机选择一个年份标签
    const yearTag = await prisma.tag.findFirst({
      where: {
        categoryId: yearCategory.id,
      },
      skip: Math.floor(Math.random() * 3)
    });

    // 创建题目
    const question = await prisma.question.create({
      data: {
        title: `测试题目 ${i + 1}`,
        content: type === 'multiple_choice'
          ? '下面哪个选项是正确的？\nA. 选项A\nB. 选项B\nC. 选项C\nD. 选项D'
          : type === 'true_false'
            ? '判断下列说法是否正确。'
            : '请解答下列问题。',
        type,
        options: type === 'multiple_choice' ? JSON.stringify(['选项A', '选项B', '选项C', '选项D']) : null,
        answer: type === 'multiple_choice' ? '1' : type === 'true_false' ? 'true' : '解答步骤...',
        category: {
          connect: {
            id: categories[Math.floor(Math.random() * categories.length)].id
          }
        },
        subject: {
          connect: {
            id: subjects[Math.floor(Math.random() * subjects.length)].id
          }
        },
        grade: {
          connect: {
            id: grades[Math.floor(Math.random() * grades.length)].id
          }
        },
        source: {
          connect: {
            id: sources[Math.floor(Math.random() * sources.length)].id
          }
        },
        createdBy: {
          connect: {
            id: defaultUser.id
          }
        },
        updatedBy: {
          connect: {
            id: defaultUser.id
          }
        }
      }
    });

    // 添加标签关联
    await Promise.all([
      // 题型标签
      typeTag && prisma.questionTag.create({
        data: {
          questionId: question.id,
          tagId: typeTag.id,
          createdById: defaultUser.id,
          updatedById: defaultUser.id,
        }
      }),
      // 难度标签
      difficultyTag && prisma.questionTag.create({
        data: {
          questionId: question.id,
          tagId: difficultyTag.id,
          createdById: defaultUser.id,
          updatedById: defaultUser.id,
        }
      }),
      // 来源标签
      sourceTag && prisma.questionTag.create({
        data: {
          questionId: question.id,
          tagId: sourceTag.id,
          createdById: defaultUser.id,
          updatedById: defaultUser.id,
        }
      }),
      // 省份标签
      provinceTag && prisma.questionTag.create({
        data: {
          questionId: question.id,
          tagId: provinceTag.id,
          createdById: defaultUser.id,
          updatedById: defaultUser.id,
        }
      }),
      // 年份标签
      yearTag && prisma.questionTag.create({
        data: {
          questionId: question.id,
          tagId: yearTag.id,
          createdById: defaultUser.id,
          updatedById: defaultUser.id,
        }
      }),
    ].filter(Boolean));

    // 随机添加1-2个学科素养标签
    const literacyTags = await prisma.tag.findMany({
      where: {
        categoryId: literacyCategory.id,
      },
      take: Math.floor(Math.random() * 2) + 1,
    });

    await Promise.all(
      literacyTags.map(tag => 
        prisma.questionTag.create({
          data: {
            questionId: question.id,
            tagId: tag.id,
            createdById: defaultUser.id,
            updatedById: defaultUser.id,
          }
        })
      )
    );

    // 随机添加1-2个命题特征标签
    const featureTags = await prisma.tag.findMany({
      where: {
        categoryId: featureCategory.id,
      },
      take: Math.floor(Math.random() * 2) + 1,
    });

    await Promise.all(
      featureTags.map(tag => 
        prisma.questionTag.create({
          data: {
            questionId: question.id,
            tagId: tag.id,
            createdById: defaultUser.id,
            updatedById: defaultUser.id,
          }
        })
      )
    );
  }

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
