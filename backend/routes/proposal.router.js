<<<<<<< HEAD:Flex-Work-App-main/backend/routes/proposal.router.js
const express = require('express');
const router = express.Router();
const {
  getProposals,
  getProposalById,
  createProposal,
  updateProposal,
  patchProposal,
} = require('../controllers/proposal.controller');

router.get('/', getProposals);           
router.get('/:id', getProposalById);     
router.post('/', createProposal);        
router.put('/:id', updateProposal);     
router.patch('/:id', patchProposal);

module.exports = router;
=======
const express = require('express');
const auth = require("../middleware/auth");

const router = express.Router();
const {
  getProposals,
  getProposalById,
  createProposal,
  updateProposal,
  patchProposal,
  getProposalsByClientId
} = require('../controllers/proposal.controller');

router.get('/',auth, getProposals);           
router.get('/:id',auth, getProposalById);     
router.post('/',auth, createProposal);        
router.put('/:id',auth, updateProposal);     
router.patch('/:id',auth, patchProposal);
router.get('/client/:clientId',auth, getProposalsByClientId);

module.exports = router;
>>>>>>> cbd0a131a4dcf32a52c69902999e0a4fc7ade991:backend/routes/proposal.router.js
