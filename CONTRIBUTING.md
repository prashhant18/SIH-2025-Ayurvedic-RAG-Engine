# 🤝 Contributing to Ayurvedic RAG Nutrition Engine

Thank you for your interest in contributing! This project combines traditional Ayurvedic wisdom with modern AI technology.

## 🎯 Ways to Contribute

### 1. **Code Contributions**
- Bug fixes and improvements
- New features and enhancements
- Performance optimizations
- Test coverage improvements

### 2. **Documentation**
- Improve existing documentation
- Add tutorials and guides
- Translate documentation
- Fix typos and clarity issues

### 3. **Data Contributions**
- Ayurvedic ingredient data
- Traditional recipe collections
- Dosha-specific food recommendations
- Research paper citations

### 4. **Testing & Feedback**
- Report bugs and issues
- Test on different platforms
- Provide user experience feedback
- Suggest feature improvements

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- Basic knowledge of React and Node.js
- Understanding of Ayurvedic principles (helpful)
- Familiarity with RAG systems (for advanced contributions)

### Setup Development Environment
```bash
# 1. Fork and clone the repository
git clone https://github.com/yourusername/ayurvedic-rag-nutrition-engine.git
cd ayurvedic-rag-nutrition-engine

# 2. Install dependencies
npm run install:all

# 3. Setup environment
cp backend/.env.example backend/.env
# Add your Groq API key

# 4. Run tests
npm run test:rag
npm run test:storage

# 5. Start development
npm run dev
```

## 📋 Development Guidelines

### Code Style
- Use ESLint and Prettier configurations
- Follow existing naming conventions
- Write clear, self-documenting code
- Add comments for complex logic

### Commit Messages
```bash
# Format: type(scope): description
feat(rag): add new vector search algorithm
fix(auth): resolve JWT token expiration issue
docs(api): update endpoint documentation
test(storage): add patient data persistence tests
```

### Branch Naming
```bash
feature/add-new-dosha-analysis
bugfix/fix-patient-data-validation
docs/update-setup-guide
test/add-integration-tests
```

## 🧪 Testing Requirements

### Before Submitting PR
```bash
# Run all tests
npm run test:rag
npm run test:storage
npm run test:shutdown

# Check data files
npm run check:data

# Test startup
npm start
```

### Test Coverage
- Add tests for new features
- Ensure existing tests pass
- Test edge cases and error conditions
- Verify cross-platform compatibility

## 📝 Pull Request Process

### 1. **Preparation**
- Create feature branch from `main`
- Make your changes
- Add/update tests
- Update documentation

### 2. **Submission**
- Push to your fork
- Create pull request
- Fill out PR template
- Link related issues

### 3. **Review Process**
- Automated tests will run
- Code review by maintainers
- Address feedback
- Merge when approved

## 🎨 UI/UX Contributions

### Design Guidelines
- Follow Ayurvedic color scheme (earth tones)
- Maintain accessibility standards
- Use Tailwind CSS classes
- Ensure mobile responsiveness

### Component Structure
- Create reusable components
- Follow React best practices
- Use TypeScript for new components (if applicable)
- Add proper prop validation

## 🔬 RAG System Contributions

### Vector Search Improvements
- Optimize FAISS index performance
- Improve text chunking strategies
- Enhance embedding quality
- Add new similarity metrics

### Knowledge Base Enhancements
- Add more Ayurvedic texts
- Improve data quality
- Add multilingual support
- Enhance metadata structure

## 📊 Data Contributions

### Ayurvedic Data Standards
```json
{
  "ingredient": {
    "_id": "unique_identifier",
    "name": "Common Name (Sanskrit Name)",
    "description": "Clear description",
    "ayurvedicProperties": {
      "rasa": ["taste1", "taste2"],
      "virya": "heating/cooling",
      "vipaka": "post-digestive effect",
      "dosha_effects": {
        "vata": "increases/decreases/balances",
        "pitta": "increases/decreases/balances", 
        "kapha": "increases/decreases/balances"
      }
    },
    "sources": ["Reference 1", "Reference 2"]
  }
}
```

### Data Quality Requirements
- Accurate Ayurvedic classifications
- Proper source citations
- Consistent formatting
- Verified information

## 🐛 Bug Reports

### Issue Template
```markdown
**Bug Description**
Clear description of the bug

**Steps to Reproduce**
1. Step one
2. Step two
3. Step three

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- OS: [Windows/Mac/Linux]
- Node.js version:
- Browser (if applicable):

**Screenshots**
If applicable, add screenshots

**Additional Context**
Any other relevant information
```

## 💡 Feature Requests

### Proposal Format
- **Problem**: What problem does this solve?
- **Solution**: Proposed solution
- **Alternatives**: Other approaches considered
- **Implementation**: Technical approach
- **Impact**: Who benefits and how?

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation
- Special thanks in presentations

## 📞 Getting Help

- **Documentation**: Check `docs/` folder
- **Issues**: Search existing GitHub issues
- **Discussions**: Use GitHub Discussions
- **Email**: [Contact information if applicable]

## 🔒 Security

For security vulnerabilities:
- Do NOT create public issues
- Email security concerns privately
- Allow time for fixes before disclosure

## 📜 Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Maintain professional communication

---

**Thank you for contributing to the advancement of traditional Ayurvedic wisdom through modern technology!** 🌿✨