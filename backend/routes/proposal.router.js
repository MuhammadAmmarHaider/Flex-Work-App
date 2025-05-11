
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

