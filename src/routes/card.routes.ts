import { Router, Request, Response } from 'express';
import { LuhnService } from '../services/luhn.service';
import { ValidateCardDto } from '../dto/validate-card.dto';

const router = Router();
const luhnService = new LuhnService();

router.post('/validate', (req: Request, res: Response) => {
  const { cardNumber } = req.body as ValidateCardDto;

  if (!cardNumber) {
    return res.status(400).json({
      success: false,
      message: 'cardNumber is required',
    });
  }

  const isValid = luhnService.validate(cardNumber);

  res.json({
    success: true,
    isValid,
  });
});

export default router;
